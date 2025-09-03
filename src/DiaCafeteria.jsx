function DiaCafeteria() {
    return (
      <div className="container py-5 text-center">
        <h1>☕ Ese día en la Cafetería</h1>
        <p>Fue un día lleno de risas y buena compañía 💛</p>
        <img
          src="/foto1.jpg"
          alt="Cafetería"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>
    );
  }
  
  export default DiaCafeteria;