

export const ProfileCard = ({ name, bio, themeColor, showBadges }) => {
    return (
        <div className="card shadow-lg border-0 ${theme}" >
            <div className="card-body text-center">
                <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" width="130" height="130" />

                <h4 className="fw-bold">{name || "Usuario por defecto"}</h4>
                <p className="text-muted"> {bio || "bio"}</p>

                {showBadges &&
                    <h4 className="fw-bold"><i class="bi bi-star"></i></h4>
                }

                <button className="btn btn-outline-primary w-100">Contactar</button>
            </div>
        </div>
    );
}