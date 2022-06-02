<template>
    <div class="ideas">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Ideen / Brainstorming</h1>
                    <p class="text-center fs-4">Threads mit Themen zu denen Vorschläge erarbeitet werden sollen</p>
                    </div>
                </div>
                <div class="row mb-lg-4">
                    <div class="col-lg-3 mb-2 mb-lg-0">
                        <div class="d-grid">
                            <router-link to="/ideen/erstellen" class="btn btn-success" type="button">Neuer Thread</router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <div class="d-grid">
                            <router-link to="/ideen/abgeschlossen" class="btn btn-secondary" type="button">Geschlossene Threads</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div v-for="thread in threads" :key="thread.id" class="card mb-2">
                        <div class="card-header fw-bold fs-5">
                            Thema: {{ thread.title}}
                        </div>
                        <div class="card-body">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body lg-text-start">
                                            {{thread.description}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body lg-text-start">
                                            Kommentare: {{thread.len_comments}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/ideen/1" class="btn btn-secondary">
                                                Thread ansehen
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/ideen/1" class="btn btn-danger">
                                                Thread schließen
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'KVIdeas',
  data () {
    return {
      threads: [
        {
          id: 1,
          title: 'Sprüche Banner',
          description: 'Testbeschreibung 1',
          len_comments: 6
        },
        {
          id: 2,
          title: 'Organisation 1. Mai',
          description: 'Testbeschreibung 2',
          len_comments: 3
        }
      ]
    }
  }
}
</script>
