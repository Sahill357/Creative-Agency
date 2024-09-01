import {useEffect} from 'react'

const LoadScripts = () => {
    useEffect(() => {
        // Array of script URLs
        const scriptUrls = [
            `${process.env.PUBLIC_URL}/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js`,
            `${process.env.PUBLIC_URL}/assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/js/webflow.ca5e5f05b.js`,
             
            
        ];

        // Load each script
        // Function to load scripts one by one
        const loadScriptSequentially = (urls, index = 0) => {
            if (index < urls.length) {
                const script = document.createElement('script');
                script.src = urls[index];
                script.async = true;
                script.onload = () => {
                    loadScriptSequentially(urls, index + 1);
                };
                document.body.appendChild(script);
            }
        };

        // Start loading scripts sequentially
        loadScriptSequentially(scriptUrls);

        return () => {
            scriptUrls.forEach(url => {
                let script = document.querySelector(`script[src="${url}"]`);
                script.async = true;
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
}

export default LoadScripts
