<template>
  <div class="tasks">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Sitzungsverwaltung</h1>
                    <p class="text-center fs-4">Auflistung der Aufgaben nach Bearbeitungsenddatum</p>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="col">
                        <div class="card">
                            <div class="card-header fs-4">
                                Tagesordnung der Sitzung am {{ agenda.date }}
                            </div>
                            <div class="card-body">
                                <div class="row mb-lg-4">
                                    <div class="col-lg-3 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/" class="btn btn-success" type="button">Tagesordnungspunkt hinzufügen</router-link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/sitzungen/protokoll/schreiben" class="btn btn-secondary" type="button">Protokoll schreiben</router-link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 mb-2 mb-lg-0">
                                        <div class="d-grid">
                                            <router-link to="/" class="btn btn-danger" type="button">Frühere Protokolle</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="card-header fs-5">
                                        Static
                                    </div>
                                    <div class="card-body text-start">
                                        <ul>
                                            <li>Redeleitung</li>
                                            <li>Protokollführung</li>
                                            <li>Beschluss der Tagesordnung</li>
                                            <li>Beschluss früherer Protokolle</li>
                                            <li>Beschlusskontrolle</li>
                                            <li>Eintritte</li>
                                            <li>Austritte</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="card-header fs-5">
                                        Dynamic
                                    </div>
                                    <div class="card-body text-start">
                                        <ul>
                                            <li v-for="topic in agenda.topics" :key="topic.id" class="fs-5 mb-2">{{topic.name}}
                                                <ul v-for="event in topic.events" :key="event.id" class="fs-6">
                                                    <li>Veranstaltung: {{event.name}} am {{event.date}}</li>
                                                    <ul v-for="task in event.tasks" :key="task.id" class="fs-6">
                                                        <li>Aufgabe: {{task.name}}</li>
                                                    </ul>
                                                    <ul v-for="discussion in event.discussions" :key="discussion.id" class="fs-6">
                                                        <li>Diskussion: {{discussion.name}}</li>
                                                    </ul>
                                                    <ul v-for="brainstorming in event.brainstormings" :key="brainstorming.id" class="fs-6">
                                                        <li>Brainstorming: {{brainstorming.name}}</li>
                                                    </ul>
                                                    <ul v-for="resolution in event.resolutions" :key="resolution.id" class="fs-6">
                                                        <li>Beschluss: {{resolution.name}}</li>
                                                    </ul>
                                                </ul>
                                                <ul v-for="no_event in topic.not_event_related" :key="no_event.id" class="fs-6">
                                                    <li v-for="task in no_event.tasks" :key="task.id">Aufgabe: {{task.name}}</li>
                                                    <li v-for="resolution in no_event.resolutions" :key="resolution.id">Abstimmung: {{resolution.name}}</li>
                                                    <li v-for="brainstorming in no_event.brainstormings" :key="brainstorming.id">Brainstorming: {{brainstorming.name}}</li>
                                                    <li v-for="discussion in no_event.discussions" :key="discussion.id">Diskussion: {{discussion.name}}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="card-header fs-5">
                                        Static 2
                                    </div>
                                    <div class="card-body text-start">
                                        <ul>
                                            <li>Kurzbereichte und Verschiedenes</li>
                                            <li>Anträge</li>
                                        </ul>
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
  name: 'MeetingHome',
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
            id: 1,
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
