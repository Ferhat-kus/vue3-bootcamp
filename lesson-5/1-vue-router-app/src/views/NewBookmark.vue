<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input
        type="email"
        class="form-control"
        id="title"
        placeholder="Ferhat"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea
        type="text"
        class="form-control"
        id="description"
        placeholder="Bu var ya..."
      />
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button
        class="btn btn-sm btn-secondary"
        @click="$router.push({ name: 'HomePage' })"
      >
        İptal</button
      ><button class="btn btn-sm btn-primary">Kaydet</button>
    </div>
  </div>
</template>
