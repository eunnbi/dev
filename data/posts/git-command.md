---
emoji: ๐ฌ
title: ์์ฃผ ์ฐ๋ Git ๋ช๋ น์ด
date: "2022-10-20"
category: Git
preview: "1. ์๋ก์ด git repository ์์ฑ ๋ฐ ์ด๊ธฐํ git init 2. ์๊ฒฉ ์ ์ฅ์ ํ์ธ ๋ฐ ์ถ๊ฐ git remote -v git remote add name repo-url ๋ณดํต origin์ผ๋ก ์ถ๊ฐ 3. ๋ธ๋์น ์์ฑ ๋ก์ปฌ ๋ธ๋์น ์์ฑ git checkout -b branch-name ๋ฆฌ๋ชจํธ ๋ธ๋์น ์์ฑ git push origin branch-name 4. ๋ธ๋์น ์ญ์  ๋ก์ปฌ ๋ธ๋์น ์ญ์  git branch -D branch-name ๋ฆฌ๋ชจํธ ๋ธ๋์น ์ญ์  git push origin --delete branch-name"
---

## 1. ์๋ก์ด git repository ์์ฑ ๋ฐ ์ด๊ธฐํ

```bash
git init
```

<br/>

## 2. ์๊ฒฉ ์ ์ฅ์ ํ์ธ ๋ฐ ์ถ๊ฐ

```bash
git remote -v
```

```bash
git remote add name repo-url #### ๋ณดํต origin์ผ๋ก ์ถ๊ฐ
```

<br/>

## 3. ๋ธ๋์น ์์ฑ

```bash
#### ๋ก์ปฌ ๋ธ๋์น ์์ฑ
git checkout -b branch-name
```

```bash
#### ๋ฆฌ๋ชจํธ ๋ธ๋์น ์์ฑ
git push origin branch-name
```

<br/>

## 4. ๋ธ๋์น ์ญ์ 

```bash
#### ๋ก์ปฌ ๋ธ๋์น ์ญ์ 
git branch -D branch-name
```

```bash
#### ๋ฆฌ๋ชจํธ ๋ธ๋์น ์ญ์ 
git push origin --delete branch-name
```

```bash
#### ์๊ฒฉ์ ์ฅ์์์ ์ญ์ ๋ ๋ธ๋์น๋ฅผ ๋ก์ปฌ์์๋ ๋ฐ์
git remote prune origin
```

<br/>

## 5. ๋ธ๋์น ํ์ธ

```bash
git branch -a
```

<br/>

## 6. ๋ฆฌ๋ชจํธ ๋ธ๋์น ๊ฐ์ ธ์ค๊ธฐ

```bash
git checkout -t remotes/origin/branch-name
```

<br/>

## 7. status, add, commit, push

๋ก์ปฌ ์ ์ฅ์ ๋ณ๊ฒฝ์ฌํญ ํ์ธ ๋ฐ ๋ณ๊ฒฝ์ฌํญ์ ์๊ฒฉ์ ์ฅ์๋ก ๋ด๋ณด๋ด๊ธฐ ์ํ ๋ช๋ น์ด๋ค

```bash
#### ๋ณ๊ฒฝ์ฌํญ ํ์ธ
git status
```

```bash
#### ํด๋น ํ์ผ์ ๋ณ๊ฒฝ์ฌํญ์ ์คํ์ด์ง
git add file

#### ๋ชจ๋  ๋ณ๊ฒฝ์ฌํญ์ ์คํ์ด์ง
git add .
```

```bash
#### ์คํ์ด์ง๋ ๋ณ๊ฒฝ์ฌํญ์ ๋ฉ์์ง๋ฅผ ํตํด ์ปค๋ฐ
git commit -m message
```

```bash
#### ํ์ฌ ๋ธ๋์น์์ ์ปค๋ฐ๋ ๋ด์ฉ (HEAD) ์ ์๊ฒฉ ์ ์ฅ์๋ก ๋ด๋ณด๋ด๋ ๋ช๋ น์ด
git push origin branch-name
```

<br/>

## 8. pull vs fetch

- ์๊ฒฉ์ ์ฅ์์์ ๋ก์ปฌ์ ์ฅ์๋ก ์์ค๋ฅผ ๊ฐ์ ธ์ค๋ ๋ช๋ น์ด๋ค
- `pull`๊ณผ `fetch`์ ์ฐจ์ด๋ ๊ฐ์ ธ์จ ์์ค๋ฅผ `merge`๋ฅผ ์ํ๋๋ ํ๋๋์ ์ฐจ์ด๊ฐ ์๋ค.
  - `pull`์ `merge`๋ฅผ ํ์ง๋ง, `fetch`๋ `merge`ํ์ง ์๋๋ค.

```bash
git pull origin branch-name
```

```bash
git fetch origin
```

<br/>

## 9. pull request

- repository fork
- fork๋ฅผ ํตํด ์์ฑ๋ ์์  ๊ณ์ ์ repository clone (`git clone repo-url`)
- ์ํ๋ ๋ธ๋์น ๊ฐ์ ธ์ค๊ธฐ or ๋ธ๋์น ์์ฑ
- ํด๋น ๋ธ๋์น์์ add, commit
- ํด๋น ๋ธ๋์น๋ฅผ push (`git push origin branch-name`)
- `pull request` (`merge` ํ๋ ค๋ ๋ชฉ์ ์ง ๋ธ๋์น๋ช ํ์ธ!)

<br/>

## 10. Git Repository ํฉ์น๊ธฐ

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
#### ๋ถ๋ชจ ๋ ํฌ์งํ ๋ฆฌ๊ฐ ๋น์ด ์๋ค๋ฉด README.md ๋ง๋ค๊ธฐ
git add
git commit -m โAdd README.mdโ
git push origin main
```

```bash
git fetch child-remote-name child-repo-branch-name
```

```bash
git subtree add โprefix=folder name child-remote-name parent-repo-branch-name
```

```bash
git push origin main
```

<br/>
