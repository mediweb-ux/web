import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  reasons: string[];
}

export function EmailTemplate({ name, email, message, reasons }: EmailTemplateProps) {
  const currentDate = new Date().toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '600px', 
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#28a745', 
        color: 'white', 
        padding: '25px', 
        borderRadius: '8px 8px 0 0',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0', fontSize: '26px' }}>
          ✅ Takk for din henvendelse, {name}!
        </h1>
        <p style={{ margin: '15px 0 0 0', fontSize: '16px', opacity: '0.9' }}>
          Vi har mottatt kontaktskjemaet ditt
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: '0.8' }}>
          Sendt: {currentDate}
        </p>
      </div>
      
      {/* Confirmation Message */}
      <div style={{ 
        backgroundColor: '#d4edda', 
        padding: '25px', 
        borderLeft: '4px solid #28a745',
        margin: '0'
      }}>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: '#155724',
          lineHeight: '1.6'
        }}>
          Takk for at du sendte inn kontaktskjema til <strong>MediWeb Solutions</strong>. 
          Vi har mottatt din henvendelse og vil behandle den så snart som mulig.
        </p>
      </div>

      {/* Form Data Summary */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '25px', 
        border: '1px solid #dee2e6',
        borderTop: 'none'
      }}>
        <h2 style={{ 
          color: '#495057', 
          marginTop: '0', 
          marginBottom: '20px',
          fontSize: '18px',
          borderBottom: '1px solid #dee2e6',
          paddingBottom: '10px'
        }}>
          📋 Sammendrag av din henvendelse
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ 
              padding: '8px 0', 
              fontWeight: 'bold', 
              color: '#495057',
              width: '140px',
              verticalAlign: 'top'
            }}>
              Navn:
            </td>
            <td style={{ padding: '8px 0', color: '#212529' }}>
              {name}
            </td>
          </tr>
          <tr>
            <td style={{ 
              padding: '8px 0', 
              fontWeight: 'bold', 
              color: '#495057',
              verticalAlign: 'top'
            }}>
              E-postadresse:
            </td>
            <td style={{ padding: '8px 0', color: '#212529' }}>
              {email}
            </td>
          </tr>
          <tr>
            <td style={{ 
              padding: '8px 0', 
              fontWeight: 'bold', 
              color: '#495057',
              verticalAlign: 'top'
            }}>
              Kontaktårsak(er):
            </td>
            <td style={{ padding: '8px 0', color: '#212529' }}>
              <div>
                {reasons.map((reason, index) => (
                  <span 
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e9ecef',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      marginRight: '8px',
                      marginBottom: '6px',
                      border: '1px solid #ced4da'
                    }}
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </td>
          </tr>
        </table>
      </div>

      {/* Message Section */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '25px', 
        border: '1px solid #dee2e6',
        borderTop: 'none'
      }}>
        <h2 style={{ 
          color: '#495057', 
          marginTop: '0',
          marginBottom: '20px',
          fontSize: '18px',
          borderBottom: '1px solid #dee2e6',
          paddingBottom: '10px'
        }}>
          💬 Din melding
        </h2>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '6px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{ 
            whiteSpace: 'pre-wrap', 
            lineHeight: '1.6',
            margin: '0',
            color: '#212529',
            fontSize: '15px'
          }}>
            {message}
          </p>
        </div>
      </div>

      {/* Next Steps Section */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '25px', 
        border: '1px solid #dee2e6',
        borderTop: 'none',
        borderRadius: '0 0 8px 8px'
      }}>
        <h2 style={{ 
          color: '#495057', 
          marginTop: '0',
          marginBottom: '20px',
          fontSize: '18px',
          borderBottom: '1px solid #dee2e6',
          paddingBottom: '10px'
        }}>
          🚀 Hva skjer videre?
        </h2>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '6px',
          border: '1px solid #bbdefb'
        }}>
          <p style={{ 
            margin: '0 0 15px 0',
            color: '#1565c0',
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            Vi vil se på meldingen din og ta kontakt med deg på e-post <strong>{email}</strong> så snart som mulig.
          </p>
          <p style={{ 
            margin: '0',
            color: '#424242',
            fontSize: '14px'
          }}>
            <strong>Forventet responstid:</strong> Vi svarer normalt innen 1-3 dager på hverdager.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '6px',
        borderTop: '3px solid #28a745',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0 0 10px 0', 
          fontSize: '16px', 
          color: '#495057',
          fontWeight: 'bold'
        }}>
          MediWeb Solutions
        </p>
        <p style={{ 
          margin: '0', 
          fontSize: '12px', 
          color: '#6c757d'
        }}>
          📧 Dette er en automatisk bekreftelse på at vi har mottatt din henvendelse.<br/>
          Ikke svar på denne e-posten - vi vil kontakte deg direkte på din oppgitte e-postadresse.
        </p>
      </div>
    </div>
  );
}