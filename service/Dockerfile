FROM ubuntu:16.04
RUN apt-get update
RUN apt-get install -y maven openjdk-8-jdk openjdk-8-demo openjdk-8-doc openjdk-8-jre-headless openjdk-8-source
ADD source /source
RUN cd /source && mvn clean install
CMD java -jar /source/target/barf-parent-0.1.0.jar
