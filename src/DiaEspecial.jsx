function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
        <h1>💕 Un recuerdo especial</h1>
        <p>Un momento que siempre quedará en nuestra memoria ✨</p>
        <img
          src="/foto2.jpg"
          alt="Recuerdo especial"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>
    );
  }
  
  export default DiaEspecial;