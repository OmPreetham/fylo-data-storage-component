const FyloDataStorage = () => {
  return (
    <div className="wrapper">
      <main>
        <div className="components-wrapper">
          <section>
            <div className="features">
              <div className="features__title">
                <img className="logo" src="/images/logo.svg" alt="Logo" />
              </div>
              <div className="actions">
                <div className="actions__document">
                  <img
                    className="document-icon"
                    src="/images/icon-document.svg"
                    alt="Document Icon"
                  />
                </div>
                <div className="actions__folder">
                  <img
                    className="folder-icon"
                    src="/images/icon-folder.svg"
                    alt="Folder Icon"
                  />
                </div>
                <div className="actions__upload">
                  <img
                    className="upload-icon"
                    src="/images/icon-upload.svg"
                    alt="Upload Icon"
                  />
                </div>
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
              <div className="storage__bar">
                <div className="storage__bar__percentage"></div>
              </div>
              <div className="storage__points">
                <p className="storage__points-start">0 GB</p>
                <p className="storage__points-end">1000 GB</p>
              </div>
              <div className="storage__popup">
                <p className="storage__popup__content">
                  <span>185</span>GB left
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default FyloDataStorage
