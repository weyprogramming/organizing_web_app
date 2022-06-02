<template>
  <div class="ideas">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Protokollverfassung für Sitzung am {{meeting.date}}</h1>
                    <p class="text-center fs-4">Durcharbeitung der Tagesordnung</p>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="col">
                        <div class="card">
                            <div class="card-header fs-4">
                                Protokoll für {{meeting.date}}
                            </div>
                            <div class="card-body">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Redeleitung
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <select class="form-select" id="inputGroupSelect02">
                                                <option v-for="member in members" :key="member.id">{{member.name}}</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Protokollführung
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <select class="form-select" id="inputGroupSelect02">
                                                <option v-for="member in members" :key="member.id">{{member.name}}</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Beschluss der Tagesordnung
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="col justify-content-start">
                                                    <div class="row">
                                                        <div class="col-lg-4 mb-2 mb-lg-0">
                                                            <div class="d-grid">
                                                                <button class="btn btn-success">Tagesordnung beschließen</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 mb-2 ">
                                                            <div class="d-grid">
                                                                <button class="btn btn-danger">Tagesordnung nicht beschließen</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="d-grid">
                                                                <router-link to="/protokolle/id" class="btn btn-dark" type="button">Änderungen durchführen</router-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Beschluss des früheren Protokolls
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="col justify-content-start">
                                                    <div class="row">
                                                        <div class="col-lg-4 mb-2 mb-lg-0">
                                                            <div class="d-grid">
                                                                <button class="btn btn-success">Protokoll beschließen</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 mb-2 ">
                                                            <div class="d-grid">
                                                                <button class="btn btn-danger">Protokoll nicht beschließen</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="d-grid">
                                                                <router-link to="/protokolle/id" class="btn btn-dark" type="button">Zum Protokoll</router-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            Eintritte / Austritte
                                        </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="col justify-content-start">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="d-flex">
                                                                <div class="input-group flex-nowrap">
                                                                    <span class="input-group-text" id="addon-wrapping">Eintritte</span>
                                                                    <input type="number" class="form-control" aria-label="Username" aria-describedby="addon-wrapping">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex">
                                                                <div class="input-group flex-nowrap">
                                                                    <span class="input-group-text" id="addon-wrapping">Austritte</span>
                                                                    <input type="number" class="form-control" aria-label="Username" aria-describedby="addon-wrapping">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex">
                                        <router-link class="btn btn-secondary mt-3" to="/sitzungen/protokoll/schreiben/dynamic">Weiter zum Sitzungsprotokoll</router-link>
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
  name: 'WriteSessionProtocol',
  data () {
    return {
      meeting: {
        date: '22.22.2222',
        defaults: {
        }
      },
      members: [
        {
          id: 1,
          name: 'KV Mitlgied 1'
        },
        {
          id: 2,
          name: 'KV Mitlgied 2'
        },
        {
          id: 3,
          name: 'KV Mitlgied 3'
        }
      ]
    }
  }

}
</script>

<style>

</style>
