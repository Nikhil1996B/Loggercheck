import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const HeaderLoadingSkeleton = () => {
    return (
        <header>
            <Skeleton height={100} />
        </header>
    )
}


export const LoadingSkeltonTemplate = () => {
    return (
        <>
            <HeaderLoadingSkeleton />
            <main style={{ margin: '2rem 4rem' }}>
                <p>
                    <Skeleton count={40} />
                </p>
            </main>
            <footer>
                <Skeleton height={100}>
                </Skeleton>
            </footer>
        </>
    )
}