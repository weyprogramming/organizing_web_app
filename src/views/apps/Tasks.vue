<template>
  <div class="tasks">
      <div class="d-flex justify-content-center">
        <div class="col-10">
          <div class="p-1 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="text-center display-6 fw-bold">Aufgabenverwaltung</h1>
                  <p class="text-center fs-4">Auflistung der Aufgaben nach Bearbeitungsenddatum</p>
                </div>
          </div>
          <div class="row mb-lg-4">
            <div class="col-lg-3 mb-2 mb-lg-0">
              <div class="d-grid">
                <router-link to="/aufgaben/erstellen" class="btn btn-success" type="button">Erstellen</router-link>
              </div>
            </div>
            <div class="col-lg-3 mb-5 mb-lg-0">
              <div class="d-grid">
                <router-link to="/aufgaben/erstellen" class="btn btn-secondary" type="button">Erledigte Aufgaben</router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div v-for="task in tasks" :key="task.id" class="card mb-2">
              <div class="card-header fw-bold fs-5">
                Aufgabe: {{task.title}}
              </div>
              <div class="card-body">
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-lg-6 mb-2 mb-lg-0">
                      <div class="card">
                        <div class="card-body lg-text-start">
                          {{task.description}}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 mb-2 mb-lg-0">
                      <div class="card">
                        <div class="card-body">
                          {{task.deadline}}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 mb-2 mb-lg-0">
                      <div class="card">
                        <div class="card-body">
                          {{task.representative}}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-1 mb-2 mb-lg-0">
                        <div class="d-grid">
                          <router-link to="/aufgaben/details" class="btn btn-dark">
                            Details
                          </router-link>
                        </div>
                      </div>
                      <div class="col-lg-1 mb-2 mb-lg-0">
                        <div class="d-grid">
                          <router-link to="/aufgaben/erledigt" class="btn btn-danger">
                            Erledigt
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
  name: 'KVTasks',
  data () {
    return {
      tasks: [
        {
          id: 1,
          title: 'Testaufgabe 1',
          description: 'Testbeschreibung 1',
          deadline: '11.11.2022',
          representative: 'Lennart Weyrowitz'
        },
        {
          id: 2,
          title: 'Testaufgabe 2',
          description: 'Testbeschreibung 2',
          deadline: '11.11.2022',
          representative: 'Lennart Weyrowitz'
        }
      ]
    }
  }

}
</script>

<style>
</style>
