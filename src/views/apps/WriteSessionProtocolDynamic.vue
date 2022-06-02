<template>
  <div class="WriteSessionProtocolDynamic">
    <div class="d-flex justify-content-center">
      <div class="col-10">
        <div class="p-1 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="text-center display-6 fw-bold">Protokollverfassung für Sitzung am 22.22.2222 </h1>
            <p class="text-center fs-4">Durcharbeitung der Tagesordnung</p>
          </div>
        </div>
        <div class="container-fluid">
          <div class="col">
            <div class="card">
              <div class="card-header fs-4">
                Themen der Sitzung am {{ agenda.date }}
              </div>
              <div class="card-body">
                <div v-for="topic in agenda.topics" :key="topic.id">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapseOne">
                            {{topic.name}}
                        </button>
                      </h2>
                      <div id="collapse_1" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select class="form-select" id="inputGroupSelect02">
                                <option v-for="member in members" :key="member.id">{{member.name}}</option>
                            </select>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteSessionProtocolDynamic',
  data () {
    return {
      agenda: {
        date: '22.22.2222',
        speaker: '',
        secretary: '',
        agenda_resolution: '',
        last_protocol_resolution: '',
        resolution_control: [],
        topics: [
          {
            id: 1,
            name: 'Landtagswahl NRW',
            events: [
              {
                id: 1,
                name: 'Kundgebung Münsterplatz',
                description: 'Mit Janine Wissler, Jules El-Khatib und Direktkandidaten',
                date: '03.05.2022',
                tasks: [
                  {
                    id: 1,
                    name: 'Aufbau'
                  },
                  {
                    id: 2,
                    name: 'Abbau'
                  }
                ],
                resolutions: [
                  {
                    id: 1,
                    name: 'Bühne mieten'
                  },
                  {
                    id: 2,
                    name: 'Standortwahl'
                  }
                ],
                brainstormings: [
                  {
                    id: 1,
                    name: 'Aufbauanordnung'
                  }
                ],
                discussions: [
                  {
                    id: 1,
                    name: 'Irgendein Thema'
                  }
                ]
              }
            ],
            not_event_related: [
              {
                tasks: [
                  {
                    id: 1,
                    name: 'Not Event Related Task 1'
                  },
                  {
                    id: 2,
                    name: 'Not Event Related Task 2'
                  }
                ],
                resolutions: [
                  {
                    id: 1,
                    name: 'Not Event Related Resolution 1'
                  }
                ],
                brainstormings: [
                  {
                    id: 1,
                    name: 'Not Event Related Brainstorming 1'
                  }
                ],
                discussions: [
                  {
                    id: 1,
                    name: 'Not Event Related Discussion 1'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'Thema 2',
            events: [
              {
                id: 1,
                name: 'Kundgebung Münsterplatz',
                description: 'Mit Janine Wissler, Jules El-Khatib und Direktkandidaten',
                tasks: [
                  {
                    name: 'Aufbau'
                  },
                  {
                    name: 'Abbau'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
