const FyloDataStorage = () => {
  return (
    <div className="wrapper">
      <main>
        <div className="components-wrapper">
          <section>
            <div className="features">
              <div className="features__title">
                <img className="logo" src="/images/logo.svg" alt="Logo" />
                <h1 className="title">Fylo</h1>
              </div>
              <div className="features__actions">
                <img src="/images/icon-document.svg" alt="Document Icon" />
                <img src="/images/icon-folder.svg" alt="Folder Icon" />
                <img src="/images/icon-upload.svg" alt="Upload Icon" />
              </div>
            </div>
          </section>
          <section>
            <div className="storage">
              <div className="storage__info">
                <p className="info">
                  You've used <span>815 GB</span> of your storage
                </p>
              </div>
              <div className="storage__bar-outer">
                <div className="storage__bar-percentage"></div>
              </div>
              <div className="storage__points">
                <p className="storage__points-start">0 GB</p>
                <p className="storage__points-end">1000 GB</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default FyloDataStorage
