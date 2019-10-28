# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

entrada = int(input())

h = entrada // 3600
entrada = entrada - (h * 3600)

m = entrada // 60
entrada = entrada - (m * 60)

s = entrada

print("{}:{}:{}".format(h, m, s))
