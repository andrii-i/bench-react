import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css';

export function AudioBenchmarking() {
  return (

    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Audio file transcription accuracy benchmarking</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Benchmark audio files transcription accuracy by comparing the
          transcription vs truth key (the correct transctiption of the file).
        </p>


        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
          <div className="mb-3">
            <label className="form-label">File to benchmark</label>
            <input className="form-control" id="file-to-benchmark" type="file" />
            <div className="valid-feedback">Uploaded successfully</div>
            <div className="invalid-feedback">Upload failed</div>
          </div>


          <div className="mb-3">
            <label className="form-label drop-key">Truth key (correct transcription)</label>
            <input className="form-control" id="file-truth" type="file" />
            <div className="valid-feedback">Uploaded successfully</div>
            <div className="invalid-feedback">Upload failed</div>
          </div>
        </div>


        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
          <button type="button" id="benchBtn" className="btn btn-primary btn-lg px-4 gap-3">
            Benchmark
          </button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
          <canvas id="bar-chart-1" hidden></canvas>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
          <canvas id="bar-chart-2" hidden></canvas>
        </div>


      </div>
    </div>
  )
}

