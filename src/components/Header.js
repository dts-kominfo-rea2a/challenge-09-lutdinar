// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = () => {
	return (
		<>
			<div>
				<h2 style={{ marginBottom: "0" }}>Daftar Kontak</h2>
				<p style={{ marginBottom: "10px" }}>
					Daftar kontak yang dapat dihubungi oleh Anda
				</p>
			</div>
		</>
	);
};

export default Header;
