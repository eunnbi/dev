---
emoji: 💬
title: 자주 쓰는 Git 명령어
date: "2022-10-20"
category: Git
preview: "1. 새로운 git repository 생성 및 초기화 git init 2. 원격 저장소 확인 및 추가 git remote -v git remote add name repo-url #### 보통 origin으로 추가 3. 브랜치 생성 #### 로컬 브랜치 생성 git checkout -b branch-name #### 리모트 브랜치 생성 git push origin branch-name 4. 브랜치 삭제 #### 로컬 브랜치 삭제 git branch -D branch-name #### 리모트 브랜치 삭제 git push origin --delete branch-name"
---

## 1. 새로운 git repository 생성 및 초기화

```bash
git init
```

<br/>

## 2. 원격 저장소 확인 및 추가

```bash
git remote -v
```

```bash
git remote add name repo-url #### 보통 origin으로 추가
```

<br/>

## 3. 브랜치 생성

```bash
#### 로컬 브랜치 생성
git checkout -b branch-name
```

```bash
#### 리모트 브랜치 생성
git push origin branch-name
```

<br/>

## 4. 브랜치 삭제

```bash
#### 로컬 브랜치 삭제
git branch -D branch-name
```

```bash
#### 리모트 브랜치 삭제
git push origin --delete branch-name
```

```bash
#### 원격저장소에서 삭제된 브랜치를 로컬에서도 반영
git remote prune origin
```

<br/>

## 5. 브랜치 확인

```bash
git branch -a
```

<br/>

## 6. 리모트 브랜치 가져오기

```bash
git checkout -t remotes/origin/branch-name
```

<br/>

## 7. status, add, commit, push

로컬 저장소 변경사항 확인 및 변경사항을 원격저장소로 내보내기 위한 명령어들

```bash
#### 변경사항 확인
git status
```

```bash
#### 해당 파일의 변경사항을 스테이징
git add file

#### 모든 변경사항을 스테이징
git add .
```

```bash
#### 스테이징된 변경사항을 메시지를 통해 커밋
git commit -m message
```

```bash
#### 현재 브랜치에서 커밋된 내용 (HEAD) 을 원격 저장소로 내보내는 명령어
git push origin branch-name
```

<br/>

## 8. pull vs fetch

- 원격저장소에서 로컬저장소로 소스를 가져오는 명령어들
- `pull`과 `fetch`의 차이는 가져온 소스를 `merge`를 안하느냐 하느냐의 차이가 있다.
  - `pull`은 `merge`를 하지만, `fetch`는 `merge`하지 않는다.

```bash
git pull origin branch-name
```

```bash
git fetch origin
```

<br/>

## 9. pull request

- repository fork
- fork를 통해 생성된 자신 계정의 repository clone (`git clone repo-url`)
- 원하는 브랜치 가져오기 or 브랜치 생성
- 해당 브랜치에서 add, commit
- 해당 브랜치를 push (`git push origin branch-name`)
- `pull request` (`merge` 하려는 목적지 브랜치명 확인!)

<br/>

## 10. Git Repository 합치기

```bash
git clone parent-repo-url
```

```bash
git init
```

```bash
git remote add child-remote-name child-repo-url
```

```bash
#### 부모 레포지토리가 비어 있다면 README.md 만들기
git add
git commit -m “Add README.md”
git push origin main
```

```bash
git fetch child-remote-name child-repo-branch-name
```

```bash
git subtree add —prefix=folder name child-remote-name parent-repo-branch-name
```

```bash
git push origin main
```

<br/>
