

export const accountdetailsstyle = {
    membership: (sm) => ({
        minWidth: `227px`,
        minHeight: `296px`,
        marginRight: '1rem',
        marginLeft: `${sm ? '1rem' : ''}`
    }),
    plan: (sm) => ({
        minWidth: `227px`,
        minHeight: `296px`,
        marginRight: `${sm ? '1rem' : ''}`,
        marginTop: `${sm ? '1rem' : ''}`,
        marginLeft: `${sm ? '1rem' : ''}`

    }),
    background: () => ({
        background: `#F5F5F5 0% 0% no-repeat padding-box`
    })
}