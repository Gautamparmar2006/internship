import { useState } from "react";
import API from "../services/api";
import "./PredictionForm.css";

function PredictionForm() {

    const [crop, setCrop] = useState("");
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const predictPrice = async () => {

        if(crop.trim()===""){
            alert("Please enter crop name");
            return;
        }

        setLoading(true);
        setError("");
        setPrice("");

        try{

            const response = await API.post(
                "/crop/predict",
                {
                    crop:crop
                }
            );

            if(response.data.predictedPrice){

                setPrice(response.data.predictedPrice);

            }else{

                setError("Crop not found.");

            }

        }

        catch(err){

            console.log(err);

            setError("Unable to connect to server.");

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <section id="prediction" className="prediction">

            <h2>Crop Price Prediction</h2>

            <p>
                Enter the crop name and get the predicted market price.
            </p>

            <div className="prediction-box">

                <input
                    type="text"
                    placeholder="Example : Wheat"
                    value={crop}
                    onChange={(e)=>setCrop(e.target.value)}
                />

                <button onClick={predictPrice}>

                    Predict

                </button>

            </div>

            {

                loading &&

                <h3 className="loading">

                    Predicting...

                </h3>

            }

            {

                price &&

                <div className="result-card">

                    <h3>Prediction Result</h3>

                    <p>

                        Crop : <strong>{crop}</strong>

                    </p>

                    <p>

                        Predicted Price :

                        <span>

                            ₹ {price}

                        </span>

                    </p>

                </div>

            }

            {

                error &&

                <div className="error">

                    {error}

                </div>

            }

        </section>

    )

}

export default PredictionForm;