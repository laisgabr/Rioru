package net.zoe.corporation.api.wrappers;

import net.zoe.corporation.api.utils.HttpClientStarter;

import java.io.IOException;

public class GithubUser {
    public String name;
    public int id;
    public String avatar;
    public String description;
    public String url;
    public String company;
    public int numberPublicRepos;
    public int followers;
    public int following;
    public String dateCreation;
    public GithubUser(String search) throws IOException {
        Object infos = HttpClientStarter.createHttpClientAndGetAPI("https://api.github.com/users" + "/" + search.toLowerCase());
        name = infos.login;
        id = infos.id;
        avatar = infos.avatar_url;
        description = infos.bio;
        url = infos.html_url;
        company = infos.company;
        numberPublicRepos = infos.public_repos;
    }

    public static boolean exists() {
        return true;
    }
}
