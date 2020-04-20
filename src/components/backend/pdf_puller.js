import React from 'react';

export default class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement('iframe');
    
        iframe.src = `/pdf.js/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '100%';
    
        element.appendChild(iframe);
    }
}


