import React from "react";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Product } from "../components/Product";
import { NoFound } from "../components/NoFound";
import { DetailProduct } from "../components/DetailProduct";

export const RouteComponent = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/Product" element={<Product />}></Route>
				<Route path="/product/:userId" element={<DetailProduct />}></Route>
				<Route path="*" element={<NoFound />}></Route>
			</Routes>
		</div>
	);
};
