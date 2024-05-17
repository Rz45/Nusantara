<template>
    <div id="container" class="container mt-5">
        <div class="progress px-1" style="height: 3px;">
            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="step-container d-flex justify-content-between">
        <div class="step-circle" onclick="displayStep(1)">1</div>
        <div class="step-circle" onclick="displayStep(2)">2</div>
        <div class="step-circle" onclick="displayStep(3)">3</div>
    </div>

  <form id="multi-step-form">
    <div class="step step-1">
      <!-- Step 1 form fields here -->
      <h3>Step 1</h3>
      <div class="mb-3">
        <label for="field1" class="form-label">Field 1:</label>
        <input type="text" class="form-control" id="field1" name="field1">
      </div>
      <button type="button" class="btn btn-primary next-step">Next</button>
    </div>

    <div class="step step-2">
      <!-- Step 2 form fields here -->
      <h3>Step 2</h3>
      <div class="mb-3">
        <label for="field2" class="form-label">Field 2:</label>
        <input type="text" class="form-control" id="field2" name="field2">
      </div>
      <button type="button" class="btn btn-primary prev-step">Previous</button>
      <button type="button" class="btn btn-primary next-step">Next</button>
    </div>

    <div class="step step-3">
      <!-- Step 3 form fields here -->
      <h3>Step 3</h3>
      <div class="mb-3">
        <label for="field3" class="form-label">Field 3:</label>
        <input type="text" class="form-control" id="field3" name="field3">
      </div>
      <button type="button" class="btn btn-primary prev-step">Previous</button>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
  </form>

</div>

</template>

<script>
</script>

<style scoped>
#container {
  max-width: 550px;  
}

.step-container {
  position: relative;
  text-align: center;
  transform: translateY(-43%);
}

.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #007bff;
  line-height: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer; /* Added cursor pointer */
}

.step-line {
  position: absolute;
  top: 16px;
  left: 50px;
  width: calc(100% - 100px);
  height: 2px;
  background-color: #007bff;
  z-index: -1;
}

#multi-step-form{
  overflow-x: hidden;
}
</style>