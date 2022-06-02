<template>
  <div class="ideas">
    <div class="d-flex justify-content-center">
      <div class="col-10">
        <div class="p-1 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="text-center display-6 fw-bold">Ideen / Brainstorming</h1>
            <p class="text-center fs-4">
              Threads mit Themen zu denen Vorschläge erarbeitet werden sollen
            </p>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card-bordered">
            <div class="card-header bg-danger fw-bold fs-5">
              <div class="row align-items-center">
                <div class="col text-start">
                  {{ thread.title }}
                </div>
              </div>
            </div>
            <div class="card-body bg-light text-start">
              {{ thread.description }}
            </div>
            <div class="card-footer bg-secondary text-white">
              <div class="row align-items-center">
                <div class="col text-start">Von: {{ thread.creator }}</div>
                <div class="col text-end">
                  {{ thread.created_at }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-start mt-5">Kommentare</h2>
        <div class="col mt-3">
          <div
            v-for="comment in thread.comments"
            :key="comment.id"
            class="card mb-2"
          >
            <div class="card-body bg-light">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-lg-9 mb-4 mb-lg-0 text-start">
                    {{ comment.text }}
                  </div>
                  <div class="col-lg-3 d-grid gap-2">
                    <div class="btn btn-success btn-sm">
                      Upvotes: {{ comment.upvotes }}
                    </div>
                    <div class="btn btn-danger btn-sm">
                      Downvotes: {{ comment.downvotes }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-secondary text-white">
              <div class="row align-items-center">
                <div class="col text-start">Von: {{ comment.user }}</div>
                <div class="col text-end">
                  {{ thread.created_at }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="input-group mb-3 mt-4">
          <textarea
            type="text"
            class="form-control"
            placeholder="Schreibe einen Kommentar..."
            aria-describedby="make-comment-button"
            rows="3"
          ></textarea>
          <button
            class="btn btn-dark col-lg-3"
            type="button"
            id="make-comment-button"
          >
            Senden
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KVIdeasDetails',
  data () {
    return {
      thread: {
        id: 1,
        title: 'Sprüche Banner',
        description: 'Irgendeine längere Beschreibung, habe jetzt leider keine guten Ideen, was ich hier hinschreiben soll, aber Hauptsache der Text ist einigermaßen lang',
        created_at: '22.22.2022',
        creator: 'Katharina Grudin',
        comments: [
          {
            id: 1,
            user: 'Lennart Weyrowitz',
            text: 'Ja das halte ich für eine gute Idee!',
            created_at: '22.22.2022',
            upvotes: 2,
            downvotes: 5
          },
          {
            id: 2,
            user: 'Jasper Ziegler',
            text: 'Nee das finde ich doof!',
            created_at: '22.22.2022',
            upvotes: 5555,
            downvotes: -300
          }
        ]
      }
    }
  }
}
</script>
