#!/usr/bin/env perl 
# CREATED: 05. juli 2015 kl. 15.44 +0200
use strict;
use warnings;
use utf8;
use 5.10.1;
use Data::Printer;
use Array::Utils qw(:all);

my $HEX = '^[0-9a-f]{2}$';

say "Input 8 bit hex starting point for the letter [a]: ";
my $lc;
$lc = <> if !$ARGV[0];
$lc = $ARGV[0] if $ARGV[0];
chomp $lc;
die "Invalid input" unless $lc =~ /$HEX/;

$lc = hex($lc);

say "Input 8 bit hex starting point for the letter [A]: ";
my $uc;
$uc = <> if !$ARGV[1];
$uc = $ARGV[1] if $ARGV[1];
chomp $uc;
$uc = hex($uc);
my @lc = ( "a" .. "z" );
my @uc = ( "A" .. "Z" );

my @arr1 = (1, 2, 3);
my @arr2 = (1, 2, 3);

say intersect(@arr1, @arr2);

die "OVERLAP: " . intersect(@lc, @uc) if intersect(@lc, @uc);

for (@lc) {
    my $hex = sprintf( "%x", $lc );
    $hex =~ s/^([0-9a-f]{1})(?![0-9a-f])/0$1/i;
    print "$hex=", $_;	
    print "\n";
    $lc++;
}
for (@uc) {
    my $hex = sprintf( "%x", $uc );
    $hex =~ s/^([0-9a-f]{1})(?![0-9a-f])/0$1/i;
    print "$hex=", $_;
    print "\n";
    $uc++;
}
