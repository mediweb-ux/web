import * as React from 'react';

interface OwnerNotificationEmailProps {
  name: string;
  email: string;
  message: string;
  reasons: string[];
}

export function OwnerNotificationEmail({ name, email, message, reasons }: OwnerNotificationEmailProps) {
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
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '8px 8px 0 0',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>
          🔔 Nytt kontaktskjema mottatt
        </h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
          Mottatt: {currentDate}
        </p>
      </div>
      
      {/* Contact Information Section */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '25px', 
        borderLeft: '4px solid #007bff',
        margin: '0'
      }}>
        <h2 style={{ 
          color: '#495057', 
          marginTop: '0', 
          marginBottom: '20px',
          fontSize: '18px',
          borderBottom: '1px solid #dee2e6',
          paddingBottom: '10px'
        }}>
          📋 Kontaktinformasjon
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ 
              padding: '8px 0', 
              fontWeight: 'bold', 
              color: '#495057',
              width: '120px',
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
              E-post:
            </td>
            <td style={{ padding: '8px 0' }}>
              <a 
                href={`mailto:${email}`} 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ 
              padding: '8px 0', 
              fontWeight: 'bold', 
              color: '#495057',
              verticalAlign: 'top'
            }}>
              Kontaktårsaker:
            </td>
            <td style={{ padding: '8px 0', color: '#212529' }}>
              <div>
                {reasons.map((reason, index) => (
                  <span 
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e9ecef',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      marginRight: '8px',
                      marginBottom: '4px'
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
          💬 Melding
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

      {/* Action Section */}
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '8px',
        border: '1px solid #bbdefb'
      }}>
        <h3 style={{ 
          margin: '0 0 15px 0', 
          color: '#1565c0',
          fontSize: '16px'
        }}>
          🚀 Neste steg
        </h3>
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#424242' }}>
          Klikk på e-postadressen ovenfor for å svare direkte, eller kopier informasjonen til ditt CRM-system.
        </p>
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#ffffff', 
          borderRadius: '4px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>Tips:</strong> Svar innen 24 timer for best kundeopplevelse!
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '6px',
        borderTop: '3px solid #007bff'
      }}>
        <p style={{ 
          margin: '0', 
          fontSize: '12px', 
          color: '#6c757d',
          textAlign: 'center'
        }}>
          📧 Dette er en automatisk generert e-post fra kontaktskjemaet på MediWeb Solutions nettside.<br/>
          <strong>Ikke svar på denne e-posten</strong> - bruk kundens e-postadresse over for å svare.
        </p>
      </div>
    </div>
  );
}