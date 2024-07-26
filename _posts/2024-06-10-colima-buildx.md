---
layout: post
title: Build and push a docker image to AWS ECR using colima
description: Article on how to build/deploy docker images using colima
categories:
    - Docker
tag: Project
comments: true
date: 2024-05-01T19:30:49+01:00
display-date: 2024-05-01
permalink: colima-buildx.html
---

Build and push docker images to AWS ECR on MacOS using colima.

## Introduction

Docker can only run on linux because it relies on functions of the linux kernel to run.
Of course you can run the "docker" binary on other operating systems, but this is just an cli interface to docker rather than the docker daemon itself. On linux (ubuntu/debian) we can install the "docker-ce" package for the docker daemon.

Unfortunatly alot of workplaces don't offer linux machines.

But luckily on macos and/or windows we can use a virtual machine which will run docker with linux for us.

We have several options to do that for us:
- docker desktop
- colima (macos only)
- podman

Note Docker desktop requires a license for business use.
Podman and colima are both great alternatives.
But in this article I'll use colima.

## Installing/using colima
Install docker cli tool
```bash
brew install docker
```
Install colima

```bash
brew install colima
```

Create a virtual machine and start it.
Note consider the disk space your virtual machine will need, if you will need large docker images you need more space but this can quickly add up.
```bash
#colima start --cpu number --memory memory --disk storage_space
colima start --cpu 2 --memory 6 --disk 30
```
This will start the colima virtual machine.
And connect docker to it.
Now you will be able to run docker commands.

Note when you restart your OS you will need to restart colima's virtual machine. Or you can stop it manually with

```bash
colima stop
```

## Setting up buildx
The default build command that ships with the "docker" binary works for basic usecases, but we need the buildx plugin that comes with more capabilities.

Note the default docker build is now depreciated on macos.

The capability we need from buildx is the ability to build docker images for other operating systems.
Since it is likely you are using a modern arm64 architecture macos laptop, but we need to build for the amd64 linux servers running on AWS ECS.

Get buildx setup for colima
```bash
brew install docker-buildx
# Follow the caveats mentioned in the install instructions:
# mkdir -p ~/.docker/cli-plugins
# ln -sfn $(which docker-buildx) ~/.docker/cli-plugins/docker-buildx
docker buildx install
```

## Build and push a docker image for AWS ECR using buildx
Make sure you are logged into your aws account locally on the cli.
Replace [aws-account] and [aws-region] with your aws account ID and aws region with your ECR repository.
Then run the following command to log into your ECR repo locally.

Log into your AWS account and navigate to AWS ECR. Then retrieve a tempotoken to login with.
```bash
#docker login repourl.com -u user@domain.com -p token
aws ecr get-login-password --region [aws-region] | docker login --username AWS --password-stdin [aws-account].dkr.ecr.[aws-region].amazonaws.com
```

Prepare a tag for your docker image.
```bash
# a simple way to create an image tag from commit id
export IMAGE_TAG="$(git log -1 --pretty=%H)"
```

Build image and push it.

Note the img-name should be the name of your ECR repository.

```bash
docker buildx build .
    --platform linux/amd64 \
    --tag [aws-account].dkr.ecr.[aws-region].amazonaws.com/[img-name]:$IMAGE_TAG \
    --push
```

## Article references

- https://github.com/abiosoft/colima/blob/main/README.md
- https://github.com/abiosoft/colima/discussions/273
- https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
