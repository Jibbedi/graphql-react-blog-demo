import {POST_GET_ALL_ENDPOINT} from '../config/endpoint';
import {Post} from '../model/Post';
import {HatoasLink} from '../model/HatoasLink';

export interface RequestAllPostsOptions {
    onlySpotlight?: boolean;
    limit?: number;
    sortDescendingByKey?: string;
}

export async function requestAllPosts({
                                          onlySpotlight,
                                          limit,
                                          sortDescendingByKey

                                      }: RequestAllPostsOptions): Promise<Post[]> {
    const url = new URL(POST_GET_ALL_ENDPOINT);

    if (onlySpotlight) {
        url.searchParams.append("onlySpotlight", String(onlySpotlight));
    }

    if (limit) {
        url.searchParams.append("limit", String(limit));
    }

    if (sortDescendingByKey) {
        url.searchParams.append("sortDescendingByKey", sortDescendingByKey);
    }

    // then is called after request is completed. you can return another promise to chain async functions
    return fetch(url.href, {}).then(response => response.json());
}

export async function enhancePostWithCommentsAndAuthorData(post: Post) {

    // 1. find comments link and author link from hatoas

    // 2. request both values in parallel (Promise.all is your friend)
    //    use fetch(URL) to make the request.

    // 3. enhance post data with comments and author data and return promise

   return null;
}
