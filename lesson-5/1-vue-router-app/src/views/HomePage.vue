<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-sm btn-primary"
        @click="$router.push({ name: 'NewBookmark' })"
      >
        + Yeni Ekle
      </button>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <th scope="row">1</th>
          <td>Vue 3 DOC</td>
          <td>https//localhost</td>
          <td>
            <button class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
