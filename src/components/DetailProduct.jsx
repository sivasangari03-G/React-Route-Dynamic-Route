import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailProduct.module.css";
export const DetailProduct = () => {
	const { userId } = useParams();
	const [userDetail, setUserDetail] = useState({});

	useEffect(() => {
		fetch(`http://localhost:8000/posts/${userId}`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setUserDetail(json);
			})
            .catch((err) => {
				setUserDetail("err",err);
                
            });
	}, [userId]);

	console.log("userDetail", userDetail);
    return (
        
		<div className={styles.gap}>
			<h2 className={styles.color}>{userDetail.name}</h2>
			<h3>$ {userDetail.price}</h3>
			<div className={styles.float}>
				<img
					className={styles.image}
					src={userDetail.image}
					alt="mobile"
				/>
			</div>
            <div>
                <h3>Description:</h3>
                {userDetail.description}
            </div>
		</div>
	);
};
