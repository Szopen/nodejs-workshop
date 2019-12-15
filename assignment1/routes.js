const requestHandler = (req, res) => {
    const url = req.url;
    if(url ==="/"){
        res.write('hello world');
        return res.end();
    }

    if(url ==="/deneme"){
        res.write('example page');
        return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>not found</title></head>')
    res.write('<body>sayfa bulunamadı</body>')
    res.write('</html>')
    res.end();
}

exports.handler = requestHandler;