import Head from 'next/head'

export default function Home() {
  return (
    <div style={{fontFamily: 'Nanum Gothic, sans-serif'}}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
        <title> QR Codes Menus | COSAI</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className="container-fluid">
      <div className="row" style={{height:"100vh", backgroundImage: "url('/background.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <h2 style={{paddingTop: "10px"}}>COSAI</h2>
        <div className="col-sm-6">
          <h1>Create QR code Menu for your Restaurant or Cafe</h1>
          <p>Allow customers to find your menu and makes orders from their phone by just scanning a QR code.</p>
          <form className="form-inline row">
            <div className="form-group mb-2 col-auto">
              <input type="email" className="form-control" id="entryEmail" placeholder="Enter your email here"/>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Join our mailing list</button>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <h2>Hello</h2>
          {/* <img className="image-fluid" style={{height: "500px"}} src="/qr.png"/> */}
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </div>
  )
}
