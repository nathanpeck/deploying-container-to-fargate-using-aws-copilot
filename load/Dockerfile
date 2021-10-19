FROM public.ecr.aws/amazonlinux/amazonlinux:latest
RUN curl https://hey-release.s3.us-east-2.amazonaws.com/hey_linux_amd64 -o /usr/bin/hey && chmod +x /usr/bin/hey
ENTRYPOINT [ "/usr/bin/hey" ]