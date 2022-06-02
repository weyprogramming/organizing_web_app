<template>
    <div class="votes">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="text-center display-6 fw-bold">Abstimmungen</h1>
                            <p class="text-center fs-4">Abstimmungen im Kreisvorstand</p>
                        </div>
                </div>
                <div class="row mb-lg-4">
                    <div class="col-lg-3 mb-2 mb-lg-0">
                        <div class="d-grid">
                            <router-link to="/aufgaben/erstellen" class="btn btn-success" type="button">Abstimmung Erstellen</router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <div class="d-grid">
                            <router-link to="/aufgaben/erstellen" class="btn btn-secondary" type="button">Abgelaufene Abstimmungen</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div v-for="voting in votings" :key="voting.id" class="card mb-2">
                        <div class="card-header fw-bold fs-5">
                            Abstimmung: {{voting.title}}
                        </div>
                        <div class="card-body">
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
                                            <div class="card-body">
                                                {{voting.deadline}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="card">
                                            <div class="card-body">
                                                {{voting.votes_delivered}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/abstimmungen/1" class="btn btn-dark">
                                                Zur Abstimmung
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
  name: 'KVVotes',
  data () {
    return {
      votings: [
        {
          id: 1,
          title: 'Abstimmung 1',
          description: 'Beschreibung für Abstimmung 1',
          votes_delivered: 6,
          deadline: '22.22.2022',
          pro: 3,
          abstention: 1,
          against: 2
        },
        {
          id: 2,
          title: 'Abstimmung 2',
          description: 'Beschreibung für Abstimmung 2',
          votes_delivered: 8,
          deadline: '22.22.2022',
          pro: 2,
          abstention: 4,
          against: 2
        }
      ]
    }
  }
}
</script>
