import React, { useState, useEffect } from 'react';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Clear the timer if the component is unmounted before the timer fires
    }, [])
    return (
        <div>
            {/* Preloader */}
            {isLoading && (
                <div className="preloader__matias">
                    <div className="box text-center">
                        <div className="matias mb-10">
                            <img src="assets/img/banner/loader1.jpg" alt="img" />
                        </div>
                        <span className="fz-30 mati fw-600 text-uppercase">
                            Hardik
                        </span>
                    </div>
                </div>
            )}
            {/* Preloader */}
            <div class="progress-wrap">
                <svg
                    class="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path fill="#c9f31d" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
                <i class="bi bi-arrow-90deg-up title topping"></i>
            </div>
        </div>
    )
}

export default Home
