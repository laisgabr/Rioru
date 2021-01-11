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
        boolean existBool = exists(infos);
        if(!existBool) {
            name = "This user not exist";
            return;
        }

        if(infos.company == null) company = "Não faz parte de nenhuma organização";  else company = infos.company;
        if(infos.bio == null) description = "Não tem nenhuma descrição"; else description = infos.bio;

        name = infos.login;
        id = infos.id;
        avatar = infos.avatar_url;
        url = infos.html_url;
        numberPublicRepos = infos.public_repos;
        followers = infos.followers;
        following = infos.following;
        dateCreation = infos.created_at;
    }

    public boolean exists(Object Infos) {
        return Infos.message != null;
    }
}
