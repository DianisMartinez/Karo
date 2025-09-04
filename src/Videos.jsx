function Videos() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold">🎥 Nuestros Videos</h1>
      <p className="lead">Momentos divertidos juntas 💕</p>

      <div className="row justify-content-center g-4 mt-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <video
              className="w-100 rounded"
              controls
              poster="/foto1.jpg"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            >
              {/* Aquí llamas tu archivo mov desde public */}
              <source src="/video1.mov" type="video/mp4" />
              Tu navegador no soporta este formato de video.
            </video>
            <div className="card-body">
              <p className="card-text">🎬 Nuestro propio video 💕</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;