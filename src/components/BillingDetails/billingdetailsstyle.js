export const billingdetailsstlye = {
    title: (sm) => ({
        color: '#585858',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: '1rem',
        textAlign: `${sm ? 'center' : ''}`
    }),
    card: (sm) => ({
        background: "#F5F5F5",
        border: '0',
        width: '100%',
        marginBottom: '3rem',
        textAlign: `${sm ? 'center' : ''}`
    }),
    cardbody: () => ({
        padding: '0'
    }),
    details: (sm) => ({
        fontSize: '15px',
        color: '#585858',
        margin: '4px 0',
        textAlign: `${sm ? 'center' : ''}`
    }),
    options: (sm) => ({
        fontSize: '15px',
        color: '#585858',
        fontWeight: 'bold',
        textAlign: `${sm ? 'center' : ''}`
    }),
    td: () => ({
        color: '585858',
        fontSize: '15px',
        fontWeight: '400'
    }),
    th: () => ({
        color: '#585858',
        fontWeight: '500'
    }),
    tr: () => (
        {
            color: '585858',
            fontSize: '15px'
        })
}