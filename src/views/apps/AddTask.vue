<template>
    <div class="tasks">
        <div class="d-flex justify-content-center">
            <div class="col-10">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="text-center display-6 fw-bold">Aufgabenverwaltung</h1>
                        <p class="text-center fs-4">Erstellung einer neuen Aufgabe</p>
                    </div>
                </div>
                <div class="text-start">
                    <div class="mb-3">
                        <label for="TitleInput" class="form-label fw-bold">Titel</label>
                        <input class="form-control" id="TitleInput">
                    </div>
                    <div class="mb-3">
                        <label for="DescriptionInput" class="form-label fw-bold">Beschreibung</label>
                        <textarea class="form-control" id="DescriptionInput" rows="5"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="RepresentativeInput" class="form-label fw-bold">Zuständigkeit</label>
                        <select class="form-select" aria-label=".form-select-sm example">
                            <option selected></option>
                            <option value="1">KV-Mitglied 1</option>
                            <option value="2">KV-Mitglied 2</option>
                            <option value="3">KV-Mitglied 3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="DeadlineInput" class="form-label fw-bold">Deadline</label>
                        <input class="form-control" id="DeadlineInput" placeholder="DD.MM.YYYY">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AddTask'
}
</script>
