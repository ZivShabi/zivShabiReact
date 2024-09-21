
function DisplaysStructureSection({
    sectionType = "section",
    sectionTitle,
    sectionText,
    imageSrc,
    reverseOrder = false,
    cardContent,
    tableHeaders,
    tableRows,
    logoIcon,
    logoText,
    listItems,
    socialLinks
}) {
    const isCardType = sectionType === "card"
    const isImageTextType = sectionType === "imageText"

    const rowClass = `row ${isImageTextType ? 'align-items-center mb-5' :
        'text-center mb-4'} ${reverseOrder ? 'flex-row-reverse' : ''}`
    const colClass = isCardType ? "col" : "col-md-6"

    return (
        <div className={rowClass}>
            <div className={colClass}>
                {logoIcon && logoText && (
                    <div className="logo">
                        <span className="logo-icon">{logoIcon}</span>
                        <span className="logo-text">{logoText}</span>
                    </div>
                )}
                {isCardType ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{sectionTitle}</h5>
                            <p className="card-text"
                                dangerouslySetInnerHTML={{ __html: cardContent }}>
                            </p>
                        </div>
                    </div>

                ) : (<>

                    <h2>{sectionTitle}</h2>
                    {sectionText &&
                        <p className="lead text-muted">
                            {sectionText}
                        </p>
                    }
                    {tableHeaders && tableRows && (
                        <table className={`section-table ${sectionType}-table`}>
                            <thead>
                                <tr>
                                    {tableHeaders.map((header, index) => (
                                        <th key={header.id || index}>
                                            {header.text}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row, rowIndex) => (
                                    <tr key={row.id || rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {listItems && (<ul className="list-unstyled">

                        {listItems.map((item, index) => (
                            <li className="mb-2" key={item.id || index}>
                                <i className={item.icon}></i>
                                {item.text}
                            </li>
                        ))}
                    </ul>)
                    }

                    {socialLinks && (<div className="social-links">

                        {socialLinks.map((link, index) => (
                            <a href={link.url} className="me-2" key={link.id || index}>
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>)
                    }

                </>)}
            </div>

            {imageSrc && (
                <div className="col-md-6"> <img
                    src={imageSrc} alt={sectionTitle || 'Section image'}
                    className="img-fluid rounded" />
                </div>
            )}

        </div>
    )
}

export default DisplaysStructureSection
