package mail

import (
	"testing"

	"github.com/fephu/fresh-fruit/util"
	"github.com/stretchr/testify/require"
)

func TestSendEmailWithGmail(t *testing.T) {
	config, err := util.LoadConfig("..")
	require.NoError(t, err)

	sender := NewGmailSender(config.EmailSenderName, config.EmailSenderAddress, config.EmailSenderPassword)

	subject := "A test email"
	content := `
		<h1>Hello World</h1>
		<p>This is a test message from <a href="https://fresh-fruit.com">Fresh Fruit</a></p>
	`

	to := []string{"fe.phulovely@gmail.com"}
	attachFiles := []string{"../sqlc.yaml"}

	err = sender.SendEmail(subject, content, to, nil, nil, attachFiles)
	require.NoError(t, err)
}
