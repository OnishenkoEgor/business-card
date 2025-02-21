import {H3Event} from "h3";
import {Octokit} from "@octokit/core";

const octokit: Octokit = new Octokit({auth: `personal-access-token123`});

export default defineEventHandler(async (event: H3Event<Request>) => {
    const config = useRuntimeConfig()

    const octokit = new Octokit({
        auth: config.public.githubAccessToken
    })

    const {data} = await octokit.request(`GET /users/${config.public.githubUserName}/repos`, {
        username: config.public.githubUserName,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })


    return {
        list: repositoriesMapper(data)
    }
});

interface RepositoryInterface {
    name: string,
    url: string,
    language: string,
    created: string,
    updated: string
}

function repositoriesMapper(repositoryList: []): RepositoryInterface[] {
    return repositoryList.map((repository: {
        name: string,
        html_url: string,
        language: string,
        created_at: string,
        updated_at: string
    }) => {
        return {
            name: repository.name,
            url: repository.html_url,
            language: repository.language,
            created: repository.created_at,
            updated: repository.updated_at
        } satisfies RepositoryInterface;
    })
}