interface MetaInfo {
    title?: string;
    description?: string;
}

function SEOHead({title, description}: MetaInfo) {
    return (
        <>
            <title>{title}</title>
            <meta name='title' content={title}/>
            <meta name='description' content={description}/>
            <meta property='og:title' content={title}/>
            <meta property='og:description' content={description}/>
            <meta name='keywords' content='Payment, youpay, youpayuz, uz, platform'/>
        </>
    )
}

export default SEOHead