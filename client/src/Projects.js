import React from "react";

function Projects(props) {
  function handleRemodel() {
    props.history.push("/projects/remodels/1");
  }

  return (
    <>
      {/* <BasicNav /> */}
      <div className="container">
        <h1 className="text-center pb-2">Our Projects</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="card cardProject my-2" onClick={handleRemodel}>
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Gray House"
                />
              </div>
            </div>
          </div>
          {/* <div className="card-columns">
            <div className="card cardProject" onClick={handleRemodel}>
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Gray House"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Filler"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Filler"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Filler"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Filler"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">The Gray House</div>
                <img
                  className="card-img"
                  src="https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no"
                  alt="Filler"
                />
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
