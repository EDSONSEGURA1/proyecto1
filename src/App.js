import React, { useState } from "react";

const categories = [
  { id: 1, name: "Computadoras", description: "Portátiles y de escritorio" },
  { id: 2, name: "Componentes", description: "Procesadores, tarjetas, memoria" },
  { id: 3, name: "Periféricos", description: "Monitores, teclados, mouses" },
  { id: 4, name: "Accesorios", description: "Cables, mochilas, hubs USB" },
];

const featuredProducts = [
  "Laptop Gamer XYZ",
  "Procesador Intel i7 12va Gen",
  "Monitor 27'' 4K Ultra HD",
  "Teclado Mecánico RGB",
];

const Home = ({ user }) => {
  const [showFeatured, setShowFeatured] = useState(false);

  const toggleFeatured = () => setShowFeatured((prev) => !prev);

  const renderGreeting = () => {
    if (!user) {
      return (
        <>
          <h2>Bienvenido a TechStore</h2>
          <p>
            Explora nuestra amplia selección de computadoras, componentes y accesorios. 
            Regístrate para comprar y seguir tus pedidos.
          </p>
          <button style={styles.primaryButton} onClick={() => alert("Ir a registro/login")}>
            Crear Cuenta / Iniciar Sesión
          </button>
        </>
      );
    }

    switch (user.role) {
      case "cliente":
        return (
          <>
            <h2>Hola, {user.name} 👋</h2>
            <p>Encuentra lo que necesitas y revisa el estado de tus pedidos.</p>
            <button style={styles.primaryButton} onClick={toggleFeatured}>
              {showFeatured ? "Ocultar Productos Destacados" : "Ver Productos Destacados"}
            </button>
          </>
        );
      case "administrador":
        return (
          <>
            <h2>Administrador {user.name}</h2>
            <p>Gestiona productos, pedidos e inventario desde el panel de control.</p>
            <button style={styles.primaryButton} onClick={() => alert("Ir al panel de administrador")}>
              Panel de Administración
            </button>
          </>
        );
      default:
        return <h2>Bienvenido a TechStore</h2>;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>TechStore - Tu tienda de tecnología</h1>
        <nav style={styles.nav}>
          <a href="/categorias" style={styles.navLink}>Categorías</a>
          <a href="/productos" style={styles.navLink}>Productos</a>
          <a href="/carrito" style={styles.navLink}>Carrito</a>
          {user ? (
            <a href="/perfil" style={styles.navLink}>Perfil</a>
          ) : (
            <a href="/login" style={styles.navLink}>Iniciar Sesión</a>
          )}
          {user?.role === "administrador" && (
            <a href="/admin" style={{...styles.navLink, fontWeight: "bold"}}>Admin</a>
          )}
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.greetingSection}>{renderGreeting()}</section>

        {showFeatured && (
          <section style={styles.featuredSection}>
            <h3>Productos Destacados</h3>
            <ul>
              {featuredProducts.map((prod, i) => (
                <li key={i} style={styles.featuredItem}>{prod}</li>
              ))}
            </ul>
          </section>
        )}

        <section style={styles.categoriesSection}>
          <h3>Categorías</h3>
          <div style={styles.categoriesGrid}>
            {categories.map((cat) => (
              <div key={cat.id} style={styles.categoryCard}>
                <h4>{cat.name}</h4>
                <p>{cat.description}</p>
                <button style={styles.secondaryButton} onClick={() => alert(`Ver categoría: ${cat.name}`)}>
                  Ver Productos
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 TechStore - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

// Estilos CSS en JS según paleta y tipografías dadas
const styles = {
  container: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#0d1b2a", // Azul oscuro profesional
    padding: "20px 40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
  },
  main: {
    flex: 1,
    padding: "30px 40px",
  },
  greetingSection: {
    marginBottom: "30px",
  },
  primaryButton: {
    backgroundColor: "#ff6600", // Naranja brillante
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: "15px",
  },
  secondaryButton: {
    backgroundColor: "#ddd",
    border: "none",
    color: "#333",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
  featuredSection: {
    backgroundColor: "#e3f2fd",
    padding: "20px",
    borderRadius: "6px",
    marginBottom: "30px",
  },
  featuredItem: {
    padding: "8px 0",
    borderBottom: "1px solid #ccc",
  },
  categoriesSection: {},
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  categoryCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#0d1b2a",
    color: "#ccc",
    textAlign: "center",
    padding: "15px 0",
  },
};

export default Home;
