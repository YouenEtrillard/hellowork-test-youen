import axios from 'axios';
import { defineStore } from 'pinia';
import { DateTime } from 'luxon';

const API_URL = 'https://api.github.com';

export const useRepositoriesStore = defineStore('repositories', {
  state: () => ({
    repositoriesByOrgAndPage: {},
    currentPage: 1,
    orgName: '',
    isLoading: false,
  }),
  getters: {
    currentRepositories: (state) => {
      return state.repositoriesByOrgAndPage[state.orgName]
        ? state.repositoriesByOrgAndPage[state.orgName][state.currentPage] || []
        : [];
    },
  },
  actions: {
    async fetchRepositoriesByOrgAndPage(org, page) {
      this.isLoading = true;

      try {
        if (
          !this.repositoriesByOrgAndPage[org] ||
          !this.repositoriesByOrgAndPage[org][page]
        ) {
          const response = await axios.get(`${API_URL}/orgs/${org}/repos`, {
            params: {
              per_page: 10,
              page: page,
            },
          });

          // if org doesn't exist yet, initialise to avoid bugs
          if (!this.repositoriesByOrgAndPage[org])
            this.repositoriesByOrgAndPage[org] = {};

          const results = await Promise.all(
            response.data.map(async (repo) => {
              return {
                name: repo.name,
                id: repo.id,
                description: repo.description,
                forks_count: repo.forks_count,
                watchers_count: repo.watchers_count,
                updated_at: DateTime.fromISO(repo.updated_at).toLocaleString(
                  DateTime.DATETIME_MED
                ),
                license: repo?.license?.name,
                html_url: repo.html_url,
                open_issues_count: repo.open_issues_count,
                mainLanguage: await this.getMainLanguage(repo.languages_url),
                contributors: await this.getContributors(repo.contributors_url),
              };
            })
          );

          this.repositoriesByOrgAndPage[org][page] = results;
        }
      } catch (error) {
        console.error(error);
        if (this.repositoriesByOrgAndPage[org]) {
          this.repositoriesByOrgAndPage[org][page] = null;
        }
      } finally {
        this.orgName = org;
        this.currentPage = page;
        this.isLoading = false;
      }
    },
    async getMainLanguage(url) {
      try {
        const response = await axios.get(url);

        const languages = response.data;
        let mainLanguage = '';
        let currentCount = 0;

        Object.keys(languages).forEach((key) => {
          if (languages[key] > currentCount) {
            mainLanguage = key;
            currentCount = languages[key];
          }
        });

        return mainLanguage;
      } catch (error) {
        return null;
      }
    },
    async getContributors(url) {
      try {
        const response = await axios.get(url);

        const contributors = response.data.map((contributor) => {
          return {
            name: contributor.login,
            contributions: contributor.contributions,
          };
        });

        return contributors;
      } catch (error) {
        return null;
      }
    },
  },
});
