<script setup lang="ts">
import IconStar from "~icons/bx/bx-star"
import IconPR from "~icons/bx/bx-git-pull-request"

const { data: dataGithub } = await useLazyFetch("/api/github")
</script>

<template>
  <div>
    <div>
      <h5 class="inld">
        <IconStar></IconStar>
        Total Stars:
      </h5>
      <h5>Total :</h5>
      <h5>Public Repo:</h5>
      <h5>Public Repo:</h5>
      <h5>Public Repo:</h5>
    </div>
    <div></div>
    {{ dataGithub }}
  </div>
</template>
