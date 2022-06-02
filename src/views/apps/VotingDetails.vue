<template>
    <div class="ideas">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Abstimmung zu {{voting.title}}</h1>
                    <p class="text-center fs-4">Abstimmung vornehmen und Thema kommentieren</p>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card-bordered">
                        <div class="card-header bg-danger fs-5 text-white">
                            <div class="row align-items-center">
                                <div class="col text-start">
                                    {{voting.title}}
                                </div>
                                <div class="col text-end">
                                    {{voting.deadline}}
                                </div>
                            </div>
                        </div>
                        <div class="card-body bg-light">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body lg-text-start">
                                                {{voting.description}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body bg-success text-white">
                                                Dafür: {{voting.pro}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body bg-dark text-white">
                                                Enthaltungen: {{voting.abstention}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body bg-danger text-white">
                                                Dagegen: {{voting.abstention}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-secondary text-white">
                            <div class="row align-items-center">
                                <div class="col text-start">
                                    Von: {{voting.creator}}
                                </div>
                                <div class="col text-end">
                                    {{voting.created_at}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header text-centered">
                        Abstimmen
                    </div>
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-4 mb-2 mb-lg-0">
                                    <div class="d-grid">
                                        <button class="btn btn-success" type="button">Dafür Stimmen</button>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-2 mb-lg-0">
                                    <div class="d-grid">
                                        <button class="btn btn-dark" type="button">Enthalten</button>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-2 mb-lg-0">
                                    <div class="d-grid">
                                        <button class="btn btn-danger" type="button">Dagegen Stimmen</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="text-start mt-5">Kommentare</h2>
                <div class="col mt-3">
                   <div v-for="comment in voting.comments" :key="comment.id" class="card mb-2">
                       <div class="card-body bg-light">
                           <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-lg-9 mb-4 mb-lg-0 text-start">
                                        {{comment.text}}
                                    </div>
                                </div>
                           </div>
                       </div>
                       <div class="card-footer bg-secondary text-white">
                            <div class="row align-items-center">
                                <div class="col text-start">
                                    Von: {{comment.user}}
                                </div>
                                <div class="col text-end">
                                    {{comment.created_at}}
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="input-group mb-3 mt-4">
                    <textarea type="text" class="form-control" placeholder="Schreibe einen Kommentar..." aria-describedby="make-comment-button" rows="3"></textarea>
                    <button class="btn btn-dark col-lg-3" type="button" id="make-comment-button">Senden</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VotingDetails',
  data () {
    return {
      voting: {
        id: 1,
        title: 'Testabstimmung 1',
        deadline: '33.33.3022',
        description: 'Beschreibung zu Testabstimmung 1',
        creator: 'Lennart Weyrowitz',
        created_at: '22.22.2022',
        pro: 4,
        abstention: 1,
        against: 2,
        comments: [
          {
            id: 1,
            user: 'Lennart Weyrowitz',
            text: 'Vielleicht sollten wir das anders machen.',
            created_at: '22.22.2222'
          },
          {
            id: 2,
            user: 'Lennart Weyrowitz',
            text: 'Oder vielleicht auch nicht..',
            created_at: '22.22.2222'
          }
        ]
      }
    }
  }
}
</script>
