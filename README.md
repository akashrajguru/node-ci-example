# node-ci-example

# Useful links
- http://jasmine.github.io/2.0/introduction.html
- https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-jasmine

# Next steps
    - use karma to automate tests


# Docker Installation link
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-getting-started



# After the installation of Jenkins and Docker. Add jenkins user to dockergroup (like you did)

sudo gpasswd -a jenkins docker

Edit the following file

vi /usr/lib/systemd/system/docker.service

And edit this rule to expose the API :

ExecStart=/usr/bin/docker daemon -H unix:// -H tcp://localhost:2375

Now it's time to reload and restart your Docker daemon

systemctl daemon-reload
systemctl restart docker

Then I restarted jenkins and I was able to perform docker commands as jenkins user in my jenkins jobs

sudo service jenkins restart

#Jenkins github webhook link

http://http://ec2-52-212-38-57.eu-west-1.compute.amazonaws.com:8080/github-webhook/